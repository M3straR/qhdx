export default {
  attrs: {
    placeholder: {
      type: 'input',
      label: '占位符'
    },
    appendToBody: {
      type: 'switch',
      label: '弹窗插入body'
    },
    multiple: {
      type: 'switch',
      label: '是否开启多选模式'
    },
    searchable: {
      type: 'switch',
      label: '是否开启搜索功能'
    },
    async: {
      type: 'switch',
      label: '是否开启异步搜索'
    },
    autoFocus: {
      type: 'switch',
      label: '是否自动聚焦'
    },
    clearable: {
      type: 'switch',
      label: '是否显示清除图标'
    },
    limit: {
      type: 'number',
      label: '多选数量显示',
      vif: data => data.multiple
    },
    maxHeight: {
      type: 'number',
      label: '弹出菜单高度'
    },
    alwaysOpen: {
      type: 'switch',
      label: '一直打开选项菜单'
    },
    flattenSearchResults: {
      type: 'switch',
      label: '是否展平搜索结果',
      vif: data => data.async
    },
    autoLoadRootOptions: {
      type: 'switch',
      label: '是否自定加载根节点选项'
    }
  },
  attrsData: {},
  attrsDefaultData: {
    limit: Infinity,
    searchable: true,
    clearable: true,
    multiple: false,
    flattenSearchResults: false,
    autoLoadRootOptions: true,
    autoFocus: false,
    async: false,
    maxHeight: 300,
    alwaysOpen: false,
    appendToBody: false
  },
  common: {
    options: {
      type: 'json-editor',
      label: '选项'
    }
  },
  commonData: {
    options: [{
      id: 'a',
      label: 'a',
      children: [{
        id: 'aa',
        label: 'aa'
      }, {
        id: 'ab',
        label: 'ab'
      }]
    }, {
      id: 'b',
      label: 'b'
    }, {
      id: 'c',
      label: 'c'
    }]
  },
  commonDefaultData: {}
}
