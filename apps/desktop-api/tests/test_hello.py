"""Hello unit test module."""

from desktop_api.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello desktop-api"
