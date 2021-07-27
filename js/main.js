const call = $(".call");
const form = $("form");
const send = $(".send");
const paragraph = $("p");

call.click(function (event) {
  form.css({
    display: "block",
  });
  call.css({
    background: "pink",
  });

  call.dblclick(function () {
    form.css({
      display: "none",
    });
  });

  send.click(function () {
    form.css({
      display: "none",
    });
    paragraph.css({
      display: "block",
    });
  });
});
