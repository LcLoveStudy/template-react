export type MenuItemType = {
    // 菜单项的名称
    name: string;
    // 菜单项的路径
    path: string;
    // 菜单项的图标
    icon?: string;
    //是否在菜单中隐藏
    hidden?: boolean;
    // 菜单项的子菜单
    children?: MenuItemType[];
}