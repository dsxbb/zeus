 <template>
 	<div id="p2" class="mdl-progress mdl-js-progress" v-bind:class='{ "mdl-progress__indeterminate": indeterminate }'></div>
 </template>

<script>
	export default {
		props: {
			progress: {
	      required: false
	    },
	    buffer: {
	      required: false
	    },
	    indeterminate: {
	      required: false,
	      default () {
	      	return false;
	      }
	    }
		},
		ready () {
			componentHandler.upgradeElement(this.$el, 'MaterialProgress')
	    if (this.progress != null) {
	      this.$el.MaterialProgress.setProgress(this.progress)
	      this.$watch('progress', val => this.$el.MaterialProgress.setProgress(val))
	    }
	    if (this.buffer != null) {
	      this.$el.MaterialProgress.setBuffer(this.buffer)
	      this.$watch('buffer', val => this.$el.MaterialProgress.setBuffer(val))
	    }
		}
	}
</script>