<template>
                <div id="app-2">
                    <span v-bind:title="friend">
                    <a class="panel-block is-active">
                        <!--Img for profile-->
                        <figure class="image is-32x32">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                        <span class="username">
                            Joe Balls
                        </span>
                        <!--Icons-->
                        <!--Set active for gaming-->
                        <div class="userIcons">
                            <span class="icon">
                                <i class="fas fa-gamepad"></i>
                            </span>
                            <!--Set active for online-->
                            <span class="icon">
                                <i class="fas fa-plug"></i>
                            </span>
                        </div>
                    </a>
                    </span>
                </div>
</template>

<script>
export default {
    data: () => ({
        friend: 'username is active/not active',
    })
}
</script>

<style>
.username{
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 5px;
    
}
.userIcons{
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    float: none;
    
}
</style>