
while (true) {
    //放大图片
    click(500, 380);
    sleep(500)
    while (true) {
        if (className("android.widget.ImageView").desc("更多选项").exists()) {
            break;
        } else {
            click(600, 800);
            sleep(500);
        }
    }

    //点击三个点
    click(970 + 10, 80 + 10);
    sleep(500)
    className("android.widget.ListView").waitFor()

    //点击保存
    click(574 + 10, 116 + 10);
    sleep(500);

    //点击返回
    click(0 + 10, 80 + 10);
    sleep(500);

    // 滑动到下一张
    var res = swipe(100, 100, 800, 100, 500)
    // 没有下一张退出
    if (!res) {
        alert("结束！")
        break;
    }
    
    sleep(500);

}