<p align="center"><img src="https://user-images.githubusercontent.com/11046969/147825868-e8fc8ac5-6646-4bb6-8117-b40f50fc3af1.png" height="120" /></p>

# Mac 摸鱼

这是一个 Mac 系统的摸鱼应用，仿真了大多数的 Mac 系统黑屏故障。开启摸鱼功能后，可以给自己一段休息的时间~

## 1. 主界面

包含：
- “效果类型” 的选择
- 相关 “效果” 的详细配置


<p align="center"><img src="https://user-images.githubusercontent.com/11046969/147827614-a02a2466-4cd8-4fb1-8e58-2841e6946fcd.png" width="500" /></p>

## 2. 功能保障

为了，尽可能表现的和真的黑屏接近，目前实现功能有：

- 绝对全屏
- 隐藏鼠标
- `CMD+Q` 或者 `CMD+W` 等键盘操作无效
- 覆盖在一切应用顶部，不会被遮罩
- 屏幕常亮，不会休眠

在点击 “开始摸鱼” 按钮前，请记住快捷键 `CMD + SHIFT + M`，不然你就回不到你的界面了。（`M` 可以理解为 “摸鱼” 的 “摸” 拼音首字母）

## 3. 下载

可以直接去 <a href="https://github.com/lecepin/mac-fish/releases/" target="_blank">Releases</a> 中下载（国内用户如果速度不佳，可以 <a href="https://github.91chi.fun//https://github.com//lecepin/mac-fish/releases/download/v0.1.1/Mac.Fish-0.1.1.dmg" target="_blank">点击此处下载</a> ）。

## 4. 效果

目前找到的效果包含：
- 开机 Loading
  - 菊花加载效果
  - 常用方案定制
  - 进度条自动运行  
- 文件系统错误
- 网络注册错误
- 系统崩溃
- 电池没电

（如果你还知道其他黑屏效果，欢迎联系我或者贡献代码~）



#### 4.1 开机 Loading
![image](https://user-images.githubusercontent.com/11046969/147826632-5d704a9d-8fa0-4e33-b4ca-b25d807dd8a4.png)
![image](https://user-images.githubusercontent.com/11046969/147826682-f353d497-1693-4378-b190-c37ebe0f6ce3.png)

#### 4.2 文件系统错误
![image](https://user-images.githubusercontent.com/11046969/147826706-40262d41-d898-4d9d-9ab7-7c882aee2b92.png)

#### 4.3 网络注册错误
![image](https://user-images.githubusercontent.com/11046969/147826726-68eca510-4ff2-41d8-aed7-5f1907b2dde4.png)


#### 4.4 系统崩溃
![image](https://user-images.githubusercontent.com/11046969/147826744-8ceb6ed2-14ae-43e0-9ff9-cbee04176626.png)


#### 4.5 电池没电
![image](https://user-images.githubusercontent.com/11046969/147826764-c4b29234-bd6d-45ad-a640-114e89209366.png)


## 5. 功能不足

还有一部分功能属于系统级的，本软件无法控制，但也有解决方案。主要包括如下不足：

- 系统级消息通知，无法覆盖。（如钉钉消息、系统升级通知等）
- 系统级快捷键无法屏蔽。（如 `CMD+Tab`、`CMD+Space`、`Opt+Space` 等）
- 触控板手势无法屏蔽。（如 三指向上 进入调度中心 等）
- 只能在主屏幕上显示效果。（如果多屏幕，则剩余屏幕照常显示）

针对上面三中功能不足，解决方案如下。

#### 5.1 系统级消息通知，无法覆盖

可以采取：
- 直接断网，什么通知也没了
- 或者把聊天功能关闭

#### 5.2 系统级快捷键无法屏蔽

进入 Mac 的 “系统偏好设置” ➜ “键盘”，把想要关闭的快捷键取消掉就可以了，如下图所示：

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/147827669-c684e3af-fef0-46c2-b6b2-9e723c4843df.png" width="500" /></p>


#### 5.3 触控板手势无法屏蔽

这个问题同上，进入 Mac 的 “系统偏好设置” ➜ “触控板”，在 “更多手势” 中取消掉相应功能就可以了，如下图所示：

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/147827796-7a26c8ac-c827-4c14-a2b3-ba22f7359e74.png" width="500" /></p>

#### 5.4 只能在主屏幕上显示效果

请把多屏幕关掉（关掉其他屏幕电源，或者把视频信号线从你的笔记本中拔下）。


## 6. 最后

本软件灵感来自于前段时间比较热的 Windows 系统的摸鱼APP。

作者本人并不倡导你 “工作摸鱼”，本软件只是为了好玩才开发的，请大家继续保持认真工作，切勿摸鱼~
