import serverActions from "../actions/serverActions";

const getCSRF = () => {
  const els = document.getElementsByTagName("meta");
  for (let i = 0; i < els.length; i++) {
    if (els[i].getAttribute("name") === "csrf-token") {
      return els[i].getAttribute("content");
    }
  }

  return null;
};

export const apiService = (options) => {
  $.ajax({
    method: options.method || "GET",
    url: options.url,
    data: options.data || {},
    success: (data) => {
      serverActions[options.success](data);
    },
    error: (error) => {
      if (options.error) {
        serverActions[options.error](error);
      } else {
        console.log(error);
      }
    }
  });
};

export const apiCSRFService = (options) => {
  $.ajax({
    method: options.method || "GET",
    url: options.url,
    data: options.data || {},
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    },
    success: (data) => {
      serverActions[options.success](data);
    },
    error: (error) => {
      if (options.error) {
        serverActions[options.error](error);
      } else {
        console.log(error);
      }
    }
  });
};
