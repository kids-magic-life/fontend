<template>
  <b-modal
    :visible="show"
    size="xl"
    class="product-modal"
    hide-header
    hide-footer
    @hide="$emit('update:show', false)"
  >
    <div class="modal-content">
      <a
        aria-hidden="true"
        data-dismiss="modal"
        class="sb-close-btn close"
        href="#"
      >
        <font-awesome-icon icon="times" @click="$emit('update:show', false)" />
      </a>

      <b-container class="rel-div">
        <div class="title-wrap">
          <h2 class="section-title">
            <strong> Upload Gallery Image </strong>
          </h2>
          <h4 class="sub-title">
            <span>
              Give a title, upload an image, and write a description
            </span>
          </h4>
        </div>

        <b-row>
          <b-col sm="12" md="8">
            <div class="card">
              <div class="card-header">
                <h6>image details</h6>
              </div>

              <div class="card-block">
                <div class="form-group">
                  <input
                    v-model="title"
                    type="text"
                    class="form-control input-lg"
                    placeholder="Title"
                  />
                </div>

                <div class="form-group">
                  <label>Image</label>
                  <dropzone
                    id="dropzone"
                    :options="options"
                    :destroy-dropzone="true"
                    @vdropzone-files-added="addFile"
                  ></dropzone>
                </div>

                <div class="form-group">
                  <label for="input-desc">
                    Description
                  </label>
                  <textarea
                    id="input-desc"
                    v-model="description"
                    class="form-control"
                    rows="3"
                  />
                </div>

                <button
                  class="theme-btn btn"
                  :disbaled="
                    title == null || description == null || file == null
                  "
                  @click="doUpload()"
                >
                  <strong style="color: #ffffff;">
                    UPLOAD
                  </strong>
                </button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-modal>
</template>
<script>
import ADD_IMAGE from '@/graphql/ADD_IMAGE'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  name: 'GalleryUploadModal',
  components: {
    Dropzone
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: 'http://httpbin.org/post',
        maxFilesize: 3,
        maxFiles: 1,
        acceptedFiles: 'image/*',
        autoProcessQueue: false
      },
      file: null,
      title: null,
      description: null
    }
  },
  methods: {
    reset() {
      this.file = null
      this.title = null
      this.description = null
    },
    addFile(file) {
      this.file = file
    },
    doUpload() {
      if (this.title != null || this.description != null || this.file != null) {
        this.$apollo
          .mutate({
            mutation: ADD_IMAGE,
            variables: {
              title: this.title,
              description: this.description,
              file: this.file[0]
            }
          })
          .then(({ data }) => {
            this.$emit('image-upload', data.addImage)
            this.$emit('update:show', false)
            this.reset()
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error)
            this.$emit('update:show', false)
            this.reset()
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-content {
  border: 0px;
  border-radius: 0px;
}

.card {
  background-color: #fff;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 0 1px 2px 0 rgba(5, 5, 5, 0.07);
  border-radius: unset;
}
.card-header {
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  border: none;

  h6 {
    margin: 0;
    text-transform: uppercase;
    color: #b9c0c4;
    font-weight: 300;
    display: inline-block;
    font-family: Montserrat, sans-serif;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 80px;
    height: 2px;
    background-color: #b9c0c4;
  }
}

.card-block {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;

  label {
    font-weight: 600;
    font-size: 13px;
    color: #818a91;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
  }
}

.input-lg {
  height: 46px;
  padding: 10px 16px;
  line-height: 1.3333333;
  font-size: 15px;
}

.form-control {
  background-color: #fff;
  border-radius: 0;
  border-color: #e4eaec;
  box-shadow: none;
  transition: border-color 0.2s linear, background-color 0.2s linear;
  padding: 6px 12px;
  height: 35px;
}

.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #555;
  text-align: center;
  background-color: #f7f7f9;
  border: 1px solid #e4eaec;
  border-radius: 4px 0 0 4px;
  border-right: 0;
  height: 35px;
}

.theme-btn {
  border-radius: 3px;
  display: block;
  width: 100%;
  max-width: 120px;
  float: right;
}

button:disabled {
  cursor: unset;
}

.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #b7bdc1;
}
</style>
