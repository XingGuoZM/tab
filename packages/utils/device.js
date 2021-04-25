const ua = window.navigator.userAgent

// IOS
const isIOS = () => {
  if (typeof ua !== 'string') return false;
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

//Android
const isAndroid = () => {
  if (typeof ua !== 'string') return false;
  return /android/i.test(ua.toLowerCase());
};

//iphoneX
const isIphoneX = () => {
  if (typeof ua !== 'string') return false;
  const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

  if (isIOS) {
    if (
      (window.screen.height === 812 && window.screen.width === 375)
      || (window.screen.height === 896 && window.screen.width === 414)
    ) {
      return true;
    }
  }
  return false;
}

export {
  isIOS,
  isAndroid,
  isIphoneX
}