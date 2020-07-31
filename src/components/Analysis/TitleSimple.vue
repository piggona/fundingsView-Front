<template>
  <div>
    <div class="post">
      <div class="user-block">
        <div class="detail-title" style="width: 70%;">
          <span class="username" style="width: 50%">
            <a class="patent-name" href="#">{{ Title }}</a>
          </span>
        </div>
        <div class="card-body">
          <div class="top-content">
            <div>
              <p>{{ AbstractNarration }}</p>
              <div style="clear: both"></div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <!-- /.user-block -->
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "Title",
    "AbstractNarration"
  ]
};
</script>

<style>
.top-content {
  padding-bottom: 5%;
}
.bottom-content {
  padding-top: 5%;
}
/* .side-panel {
  border-style: solid;
  border-width: 0.5px;
} */
</style>
