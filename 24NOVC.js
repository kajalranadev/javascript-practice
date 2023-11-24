function countDown(num) {
  if (num <= 0) {
    console.log("Countdown complete! 🎉");
    return;
  }

  console.log(num);
  countDown(num - 1);
}

countDown(5);
