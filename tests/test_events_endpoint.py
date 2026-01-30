import pytest
import requests

BASE_URL = "http://localhost:3000"

@pytest.fixture
def valid_event():
    return {
        "name": "Event Name",
        "date": "2023-10-10T00:00:00",
        "location": "Event Location"
    }

@pytest.fixture
def invalid_event():
    return {
        "name": "",
        "date": "",
        "location": ""
    }

# Test for valid event
def test_post_valid_event(valid_event):
    response = requests.post(f"{BASE_URL}/events", json=valid_event)
    assert response.status_code == 200
    assert response.json()["name"] == valid_event["name"]

# Test for invalid event
def test_post_invalid_event(invalid_event):
    response = requests.post(f"{BASE_URL}/events", json=invalid_event)
    assert response.status_code == 400
    assert "Invalid event object" in response.json()["error"]
