(function () {
    // 获取单个卡片宽度（固定680px，不需要动态计算）
    const cardWidth = 680; 
    const cardMargin = 20; // 卡片间距
    const totalWidth = cardWidth + cardMargin;
    const num = $('.li5box-ul .li5box-car').length;
    
    // 设置ul的总宽度（3个卡片+间距）
    $('.li5box-ul').css('width', (num * totalWidth) + 'px');
    
    // 最大可滑动距离（总宽度 - 容器可视宽度）
    const containerWidth = $('.li5-box').width();
    const MAX = (num * totalWidth) - containerWidth;
    let currentPosition = 0;
  
    // 左按钮 - 向右滑动（显示左侧内容）
    $('#leftimg').click(function() {
      if (currentPosition <= 0) return; // 已经到最左
      
      currentPosition = Math.max(currentPosition - totalWidth, 0);
      $('#li5boxul').css('transform', `translateX(-${currentPosition}px)`);
      updateButtons();
    });
  
    // 右按钮 - 向左滑动（显示右侧内容）
    $('#rightimg').click(function() {
      if (currentPosition >= MAX) return; // 已经到最右
      
      currentPosition = Math.min(currentPosition + totalWidth, MAX);
      $('#li5boxul').css('transform', `translateX(-${currentPosition}px)`);
      updateButtons();
    });
  
    // 更新按钮状态
    function updateButtons() {
      $('#leftimg').toggle(currentPosition > 0);
      $('#rightimg').toggle(currentPosition < MAX);
    }
  
    // 初始化按钮状态
    updateButtons();


  $('#playbuttom').click(function () {
    $('#zhezhao').addClass('active')
    document.getElementById('videoResumeC').play();
  })

  $('#musicwrap').click(function () {
    console.log(14563)
    if ($(this).hasClass('paused')) {
      $(this).removeClass('paused')
      $('#play1')[0].play()
    } else {
      $(this).addClass('paused')
      $('#play1')[0].pause()
    }
  })


  // //一段正则，匹配所有_min.的图片src属性
	// var test = /_min\./
	// //遍历所有的图片节点
	// $("img").each(function(index,obj){	
	// 	if(test.test($(this).attr("src"))){
	// 		var reSrc = $(this).attr("src").replace(test,".");
	// 		$(this).attr("src",reSrc)
	// 	}		
	// })

})()
