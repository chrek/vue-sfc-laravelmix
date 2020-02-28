<template>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{ tweet.name }}</strong>
        <!-- <small>{{ tweet.handle }}</small> -->
        <small v-text="tweet.handle"></small>
        <br />
        {{ tweet.tweet }}
      </p>
    </div>
    <div class="level-left">
      <a class="level-item" href="">
        <span class="icon is-small">
          <i class="fas fa-heart"></i>
        </span>
        <span class="likes">
          {{ tweet.likes }}
        </span>
      </a>
      <a class="level-item" @click="$emit('add', tweet)">
        <span class="icon is-small">
          <i class="fas fa-plus"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tweet"]
};
</script>
