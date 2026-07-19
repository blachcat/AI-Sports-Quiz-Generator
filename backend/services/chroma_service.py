import chromadb
from services.embedding_service import get_embedding

# Persistent database
client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection(
    name="sports_knowledge"
)


def add_documents(documents):
    """
    Add documents to ChromaDB.
    documents = [
        {
            "id": "1",
            "sport": "Cricket",
            "text": "A century means scoring 100 runs."
        }
    ]
    """

    for doc in documents:
        collection.add(
            ids=[doc["id"]],
            documents=[doc["text"]],
            metadatas=[{"sport": doc["sport"]}],
            embeddings=[get_embedding(doc["text"])]
        )


def search_documents(query, sport, n_results=3):

    results = collection.query(
        query_embeddings=[get_embedding(query)],
        n_results=n_results,
        where={"sport": sport}
    )

    return results