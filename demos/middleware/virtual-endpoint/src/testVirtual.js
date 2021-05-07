function myVirtualHandler (request, session, config) {
  log("Virtual Test running")

  log("Request Body: " + request.Body)
  log("Session: " + JSON.stringify(session))
  log("Config: " + config)
  log("param-1: " + request.Params["param1"])
  log("auth Header: " + request.Headers["Authorization"])

  var responseObject = {
    Body: "THIS IS A VIRTUAL RESPONSE",
    Headers: {
      "x-test": "virtual-header",
      "x-test-2": "virtual-header-2"
    },
    Code: 200
  }

  return TykJsResponse(responseObject, session.meta_data)
}
log("Virtual Test initialised")