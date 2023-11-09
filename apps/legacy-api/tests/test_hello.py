"""Hello unit test module."""

from legacy_api.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello legacy-api"
