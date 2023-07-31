function handleSubmit() {
  // lấy giá trị của input chuyển sang chữ thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  // lấy element thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  // định dạng email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check value email", emailValue);

  // Dùng match để kiểm tra với email vừa nhập
  const checkEmail = emailValue.match(regex);
  console.log("email", checkEmail);

  // lấy phần chứa thông tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  console.log("check section", sectionContent);

  // lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = " Vui lòng nhập đúng email";
  }
}

function handleOnMouseOver(element) {
  //Di chuột vào đây để hiển thị button view more
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
// Rời chuột mất nút view more
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");

  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}
//Click để hiện thị thêm
function handleViewMore(element) {
  debugger;
  const parentElement = element.closest(".job-box-grid");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".job-content");
  // viewMore.style.display = "none";

  if (viewMore.classList.value.includes("view-more")) {
    console.log("check section", sectionContent);

    sectionContent.forEach((val) => {
      val.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less more";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
