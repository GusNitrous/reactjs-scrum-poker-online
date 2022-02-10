export const vibrate = (pattern = [100]) => {
    if ('vibrate' in window.navigator) {
        window.navigator.vibrate(pattern);
    }
}
