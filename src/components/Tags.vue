<template>
    <div  v-for="(item, index) in tags" :key="index">
        <span :key="index" class="tag">
            {{tags[index]}}
        </span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<DataTags>();

const current: DataTags = props
interface DataTags {
    tags: string[]
}

</script>

<style scoped>

.tag {
    display: inline-block;
    text-align: center;
    margin: 10px 15px 10px 0;
    border-radius: 10px;
    color: #fff;
    background-color: var(--colorPrimary);
    height: 25px;
    min-width: 115px;
    font-size: 14px;
    line-height: 25px;
    padding: 0 10px;
}


@media screen and (min-width: 0px) and (max-width: 768px) {
.tag {
        font-size: 10px;
        line-height: 20px;
        border-radius: 5px;
        height: 21px;
        min-width: 85px;
    }
}
</style>