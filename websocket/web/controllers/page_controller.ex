defmodule MatchPoints.PageController do
  use MatchPoints.Web, :controller

  def index(conn, _params) do
    render conn, "hello"
  end
end
