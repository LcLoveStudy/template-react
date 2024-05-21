declare type MenuItemType = {
  name: string //菜单项的名称
  path: string //菜单项的路径
  icon?: string //菜单项的图标
  hidden?: boolean //是否在菜单中隐藏
  children?: MenuItemType[] //菜单项的子菜单
}
