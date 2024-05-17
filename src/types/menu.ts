export type MenuItemType = {
    
    // 菜单项的名称
    name: string;
    
    // 菜单项的路径
    path: string;
    
    // 菜单项的图标
    icon?: string;
    
    // 菜单项的子菜单
    children?: MenuItemType[];
}