<template>
    <div class="card">
        <div class="card-content">
            <form @submit.prevent="addPost">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Picture URL</label>
                        </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="http://google.com" v-model="newPost.img">
                            </div>
                        <p class="help is-danger">
                            This field is required
                        </p>
                        </div>
                        <b-field>
                            <b-switch :value="false"
                            type="is-success" v-model="location">
                                Share Location
                            </b-switch>
                        </b-field>
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
import Session from "../models/Session";
import { AddPost, DeletePost } from "../models/Posts";

export default {
    data: () => ({
        posts: [],
        newPost: {
            user: Session.user
        },
        Session
    }),
    methods: {
        async addPost() {
            const post = await AddPost(this.newPost)
            this.posts.unshift(post);
            this.newPost = { user: Session.user }
        },
        async deletePost(i) {
            await DeletePost(i);
            this.posts.splice(i, 1);
        }
    }

}
</script>

<style>

</style>