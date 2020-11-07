### 手势密码 ./src/Components/GesturePasswordScreen.tsx

# 公共头部 ./src/Components/Headers.tsx 支持左侧、中间和右侧内容自定义

```js
    <Headers
        title={'首页'}
        leftContent={render()}
        rightContent={render()}
        leftTitle={'返回'}
        leftIcon={'left'}
        leftColor={'#fff'}
        centerColor={'green'}
        rightColor={'#fff'}
        rightIcon={'right'}
        rightTitle={'确定'}
        backgroundColor={'#fff'}///自定义背景颜色，
        {...this.props}/>
   
    ///左边按钮事件只能返回上一页
    // leftContent自定义头部左边内容信息它与leftTitle，leftIcon不可共存；
    // rightContent自定义头部左边内容信息它与rightIcon，rightTitle不可共存；
    // centerContent自定义头部左边内容信息它与title不可共存；
    leftContent={<View style={styles.leftContent}><Icon name={'left'} size={16} color={'#fff'} /><Text style={styles.leftContentTitle} numberOfLines={1}>返回</Text></View>}
    rightContent={<View style={styles.leftContent}><Text style={styles.leftContentTitle} numberOfLines={1}>确定</Text><Icon name={'right'} size={16} color={'#fff'} /></View>}
    centerContent={<Text style={[styles.headerBoxCenterText,{color:'#fff'}]} numberOfLines={1}>{'我的'}</Text>}
```
# 图片裁剪

# react-navigation 5.7以及全局控制路由跳转等

# 采用mobx+reactHook开发组件

# wanling_native_app
# wanling_native_app
