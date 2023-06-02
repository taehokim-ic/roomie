from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)

def test_search_end_point():
    response = client.get("/api/v1/search/")
    assert response.status_code == 200