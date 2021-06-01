<template>
    <div class="card">
        <div class="card-content">
            <form @submit.prevent="">

                    <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Picture URL</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="http://google.com">
                        </div>
                        <p class="help is-danger">
                            This field is required
                        </p>
                        </div>
                    </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="images">
                        </div>
                    </div>

                    <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Caption</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <textarea class="textarea" placeholder="Tell us what you are thinking" ></textarea>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="field is-horizontal">
                    <div class="field-label">
                        <!-- Left empty for spacing -->
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <button class="button is-primary">
                            Post
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>

            </form>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>