<template>
  <div class="box">
    <div class="content-box">
      <a-form
        class="content-box__item"
        v-for="item in addFormList"
        :key="item.id"
      >
        <a-form-item label="名称" class="content-box__item-name">
          <a-input v-model:value="item.name"> </a-input>
        </a-form-item>
        <a-form-item label="地址" class="content-box__item-address">
          <a-input v-model:value="item.address" style="width: 100%"> </a-input>
        </a-form-item>
        <div class="content-box__item-del">
          <CloseOutlined @click="delItem(item.id)" />
        </div>
      </a-form>
      <a-button @click="addItem">
        <PlusOutlined />
      </a-button>
    </div>
    <a-button @click="submit" type="primary" class="content-box__submit"
      >submit</a-button
    >
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
// import { message } from 'ant-design-vue'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    PlusOutlined,
    CloseOutlined
  },
  setup() {
    const state = reactive({
      addFormList: [],
      objId: 0
    })

    const addItem = () => {
      state.objId++

      const obj = {
        id: state.objId,
        name: '',
        address: ''
      }
      state.addFormList.push(obj)
    }

    const delItem = (id) => {
      state.addFormList = state.addFormList.filter((v) => {
        return v.id !== id
      })
    }

    const submit = () => {
      console.log(state.addFormList)
    }

    onMounted(() => {
      // console.log(state.addFormList)
    })

    return {
      ...toRefs(state),
      addItem,
      delItem,
      submit
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  .content-box {
    padding: 16px;
    display: flex;
    flex-direction: column;
    border: 1px solid #d9d9d9;
    margin: 16px;
    &__item {
      padding: 4px 0;
      display: flex;
      flex-direction: row;
      &-name {
        flex: 3;
      }
      &-address {
        flex: 6;
      }
      &-del {
        flex: 1;
        padding-top: 7px;
      }
    }
  }
  &__submit {
    margin: 20px auto;
    width: 100px;
  }
}

:deep(.ant-form-item-control-wrapper) {
  width: 80%;
}
</style>
