"""Hello unit test module."""

from mobile_api.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello mobile-api"
