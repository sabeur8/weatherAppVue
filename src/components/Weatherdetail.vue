<template>
  <div className='col'>
        <img :src="imagePath"/>
        <div>
        <p :className="props.data">{{props.info}} {{props.symbole}}</p>
        <p>{{props.parag}}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['data' , 'info' , 'symbole' , 'parag'])
    const imagePath = `/src/images/${props.data}.png`
</script>

<style>
  .col{
    display: flex;
    align-items: center;
    text-align: left;
}
.col img{
    width: 40px;
    margin-right: 10px;
}
.humidity, .wind{
    font-size: 20px;
    margin-top:-6px ;

}
</style>