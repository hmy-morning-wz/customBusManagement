<!--
  -    Copyright (c) 2018-2025, lengleng All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: lengleng (wangiegie@gmail.com)
  -->

<template>
  <div class="app-container pull-auto">
    <basic-container>
      <avue-crud ref="crud"
                 :page="page"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :option="tableOption"
                 @current-change="currentChange"
                 @refresh-change="refreshChange"
                 @size-change="sizeChange"
                 @search-change="searchChange" size="small"
                 @row-del="rowDel">
        <!--<template slot-scope="scope"-->
                  <!--slot="menu">-->
          <!--<el-button type="danger"-->
                     <!--v-if="permissions.push_sys_msghis_del"-->
                     <!--icon="el-icon-delete"-->
                     <!--size="small"-->
                     <!--plain-->
                     <!--@click="handleDel(scope.row,scope.index)">删除</el-button>-->
        <!--</template>-->
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
  import { fetchList, getObj, addObj, putObj, delObj } from '@/api/push/msghis'
  import { tableOption } from '@/const/crud/push/msghis'
  import { mapGetters } from 'vuex'
  import { DIC } from '@/const/crud/push/channeltemplateconf'
  export default {
    name: 'msghis',
    data() {
      return {
        tableData: [],
        page: {
          total: 0, // 总页数
          currentPage: 1, // 当前页数
          pageSize: 20 // 每页显示多少条
        },
        listQuery: {
          page: 1,
          limit: 20
        },
        tableLoading: false,
        tableOption: tableOption
      }
    },
    created() {
      this.getList()
    },
    mounted: function() { },
    computed: {
      ...mapGetters(['permissions'])
  },
  methods: {
    getList() {
      this.tableLoading = true
      fetchList(this.listQuery).then(response => {
        this.tableData = response.data.records
        this.page.total = response.data.total
        this.tableLoading = false
    })
    },
    currentChange(val) {
      this.page.currentPage = val
      this.listQuery.page = val
      this.getList()
    },
    sizeChange(val) {
      this.page.pageSize = val
      this.listQuery.limit = val
      this.getList()
    },
    /**
     * @title 打开新增窗口
     * @detail 调用crud的handleadd方法即可
     *
     **/
    handleAdd: function() {
      this.$refs.crud.rowAdd()
    },
    handleEdit(row, index) {
      this.$refs.crud.rowEdit(row, index)
    },
    handleDel(row, index) {
      this.$refs.crud.rowDel(row, index)
    },
    rowDel: function(row, index) {
      var _this = this
      this.$confirm('是否确认删除ID为' + row.id, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(function() {
          return delObj(row.id)
        })
        .then(data => {
        _this.tableData.splice(index, 1)
      _this.$message({
        showClose: true,
        message: '删除成功',
        type: 'success'
      })
    })
    .catch(function(err) { })
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate: function(row, index, done) {
      putObj(row).then(data => {
        this.tableData.splice(index, 1, Object.assign({}, row))
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      })
      done()
    })
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave: function(row, done) {
      addObj(row).then(data => {
        this.tableData.push(Object.assign({}, row))
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
        this.getList()
      done()
    })
    },
    /**
     * 刷新回调
     */
    refreshChange() {
      this.getList()
    },
      searchChange(form) {
          this.listQuery.page=1
          this.page.currentPage =1
          this.listQuery.channel_conf_id = form.channelConfId
          this.listQuery.receive_id = form.receiveId
          this.listQuery.template_id = form.templateId
          this.getList();
      }
  }
  }
</script>

<style lang="scss" scoped>
</style>

