const menuIconsPath = require.context('./', true, /\.svg$/);
const menuIcons = {};
menuIconsPath.keys().forEach(item => {
    menuIcons[item.replace('./', '').replace('.svg', '')] = menuIconsPath(item).default;
});
export default menuIcons;
