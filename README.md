# bootstrap-demo
响应式网站，适配移动端和PC端，使用了jquery+bootstrap+less

遇到的坑：
1、
问题：PC端的hover伪类在移动端不适宜
解决方案：添加媒体查询，如果是移动端不添加伪类，移动端增加判断，改为touch事件；

2、
问题：bootstrap的轮播图在移动端不适宜，不能滑屏切换
解决方案：添加touch事件，判断划过距离，距离超过30则切换图片
