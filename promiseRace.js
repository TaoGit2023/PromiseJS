const dataOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "data1";
      resolve(data);
    }, 2000);
  });
};

const dataTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data2 = "Time Out";
      resolve(data2);
    }, 3000);
  });
};

const handleBtnClick = () => {
  const promises = [dataOne(), dataTwo()];
  Promise.race(promises).then((res) => {
    if (res === "Time Out") {
      console.log(res);
    } else {
      console.log("successfully fetched data", res);
    }
  });
};

handleBtnClick();
