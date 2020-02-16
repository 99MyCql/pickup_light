<template>
  <div>
    <!-- Main Menu Section -->
    <head-er></head-er>

    <!-- Home Slider -->
    <div>
      <el-carousel height="500px" :interval="3000" trigger="click">
        <el-carousel-item>
          <div class="slider-item slider1">
            <div class="container">
              <div class="slide-inner text-left">
                <h1>人虽老矣，学习不停</h1>
                <p>在采访过程中我们感受到，老兵爷爷们虽然已经年老，<br>但他们曾经作为青年的那颗拼搏的劲却并未消退。</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-item white-bg slider2">
            <div class="container">
              <div class="slide-inner text-center">
                <h1>Weeding Business & Casual</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-item slider3">
            <div class="container">
              <div class="slide-inner text-left">
                <h1>Minimal  Summer Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="post" v-for="(post, index) in this.posts" :key="index">
              <div class="post-media post-thumb">
                <img :src="post.img" alt="">
              </div>
              <h2 class="post-title">{{ post.title }}</h2>
              <div class="post-meta">
                <ul>
                  <li>
                    <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                  </li>
                  <li>
                    <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href=""> TRAVEL</a>, <a href="">FASHION</a>
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="post-content">
                <p>{{ post.summary }}</p>
                <button class="btn btn-main" @click="toBlog(post)">阅读详情</button>
              </div>
            </div>

            <el-pagination
              class="text-center"
              style="margin-top:70px"
              background
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
            <!-- pagination -->
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <foot-er></foot-er>
  </div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
import store from '@/store/index'

export default {
  components: {
    headEr,
    footEr
  },
  data() {
    return {
      posts: [
        {
          img: require('../assets/blog/blog-post-3.jpg'),
          title: '张洪山 88岁 志愿军革命战士',
          summary: '老人给我们讲述了朝鲜战场上的那些腥风血雨的故事。1947年年仅16岁的他毅然决然地投身战争，保家卫国。其中最印象深刻的就是马良山战斗，在这场战斗中，中国人民志愿军第64军第191师也就是张洪山所在的军队在防御和反击战中，共毙伤俘英、美军4400余人......',
          content: '<p>老人给我们讲述了朝鲜战场上的那些腥风血雨的故事。</p><p>1947年年仅16岁的他毅然决然地投身战争，保家卫国。其中最印象深刻的就是马良山战斗，在这场战斗中，中国人民志愿军第64军第191师也就是张洪山所在的军队在防御和反击战中，共毙伤俘英、美军4400余人，击落飞机14架，击毁坦克六辆。而令老人最难忘的莫过于这场战斗的艰辛与惨烈，说着老人掀开了裤腿，让我们看他腿上的伤疤，一条条伤疤让我们在震惊之余更觉得敬佩，张洪山老爷爷的脊背微微挺直。那段经历在他心中留下了难以磨灭的光辉印记，从他的眼神中，队员看到了骄傲与自豪。</p><p>谈起了军中生活，无疑是艰苦甚至是难熬的。战争时，住宿在山上，走在深山老林里，缺吃少穿。说到这，老人欣慰地感叹，能在和平年代，在敬老院享受政府的优待，真的很幸福。</p><p>当我们问到老人对党和国家有什么期望时，老人平静地说，正是党和国家的努力才换来了如今的生活，希望国家更加富强，像习近平总书记说的那样，站起来、强起来、富起来。当得知我们实践队员从全国各地来到这里以后，老人心中万分感慨，他感谢队员们来这里体验学习，忆苦思甜。最后老人希望我们当代青年可以发扬延安精神，吃苦耐劳，努力学习，积极承担社会责任。</p><p>采访抗战老兵，你很难想象，垂暮的老人追忆起意气风发的戎马生涯，眼神满是奕奕神采。哪怕是稍纵即逝，也足以让人感受到抗战老兵身上尘封已久的骄傲与荣光。现年91岁的张福德老人给我们讲述了他当年浴血奋战的故事。在抗美援朝战役中，老人所在的军队奉命守住阵地，激烈的战斗使他们无法下战场，七天七夜没吃没喝的他们，最终圆满的完成了任务。老人越讲越激动，当讲到自己被炮弹炸聋的耳朵、自己救助的朝鲜小男孩以及当年立下的保证:就算战斗到最后一个人也要完成组织上交代的任务时，老人的眼中泛起了泪花。张福德老爷爷还给我们看了他的笔记本，上面写了对党和国家的歌颂、写的日记以及自创的快板等。</p>'
        },
        {
          img: require('../assets/blog/blog-post-4.jpg'),
          title: '刘泽民 91岁 志愿军革命战士',
          summary: '人虽老矣，学习不停。在采访过程中我们感受到，老兵爷爷们虽然已经年老，但他们曾经作为青年的那颗拼搏的劲却并未消退，而是从报效祖国转移到了学习上来，他们活到老学到老的精神感染了我们，感染了青年们......',
          content: '<p>人虽老矣，学习不停。</p><p>在采访过程中我们感受到，老兵爷爷们虽然已经年老，但他们曾经作为青年的那颗拼搏的劲却并未消退，而是从报效祖国转移到了学习上来，他们活到老学到老的精神感染了我们，感染了青年们。</p><p>刘泽民爷爷给我们印象非常深刻，他今年91岁了，他原本并不识字，但自从他来到了八一敬老院以后，他开始学习识字、写字，他将自己在战场上拼搏前进的那份热血放到了学习上来，实在令人百般敬畏。他在明信片上、旗帜上，都留下了自己对我们南航青年人的寄语和期望。</p><p>除此之外，他还说：“不光是学写字，我还在学英语呢！”听到这里，作为青年人的我们不禁惭愧起来，我们对学习的热情真的能比上这位四肢不灵活，听力、视力都已经迟钝了的老兵爷爷吗？我想，虽然老兵爷爷们不如我们青年人有文化，但是他自己曾经作为青年那份热血却却丝毫没有退减，“活到老，学到老”的精神在他身上展现得淋漓尽致，我们青年人在学习自己不擅长事物时又何曾不是畏惧更多一些呢？我们青年人虽接受高等教育，但对待学习的态度并不及这位爷爷，我们应学习这位爷爷，学习他“活到老，学到老”的精神，学习他保住自己作为青年人的那份热血，学习他老一辈的青年魂。</p><p>老兵爷爷们都曾是青年，我们当代青年人与他们之间的沟通，也是一次青年与青年心灵对话。聆听老一辈青年的故事和嘱托，是我们当代青年人学习感悟的一次宝贵机会，由此领悟到了延安精神的精髓，我们或许对于自身的不足之处更加清晰了。</p><p>一个多小时，短而难忘可贵。我们以当代青年人的身份与当时参与抗日战争、解放战争、朝鲜战争的老兵进行了对话。我们聆听他们细说当时热血惊险的抗战经历，激动澎湃。从他们激昂的话语中，我们仍能感受到他们的热血报国之志以及作为老年人却不忘学习进步的心。在那个动荡的年代，无数青年的牺牲，才换取到当代青年们学习工作环境的安定和平，为国家的富裕昌盛打好了奠基。作为青年的我们不可任由时间流逝而碌碌无为，应当珍惜和平年代，珍惜能舒适学习工作的大好年华，抓紧每分每秒去奋斗拼搏。八一敬老院之旅，是老一辈青年与新一代青年之间的沟通之旅，看到老一辈青年们都仍然如此热血、如此好学，我们又有何理由止步不前呢？</p>'
        },
        {
          img: require('../assets/blog/blog-post-1.jpg'),
          title: 'How To Wear Bright Shoes',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae.',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere. </p><blockquote class="quote-post"><p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error</p></blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum illo deserunt necessitatibus quibusdam sint, eos explicabo tenetur molestiae vero facere, aspernatur sit mollitia perferendis reiciendis. Deleniti magni explicabo sed alias fugit amet animi molestias ipsum maiores. Praesentium sint, id laborum quos. Tempora inventore est, dolor corporis quis doloremque nostrum, eos velit culpa quasi labore. Provident laborum porro nihil iste, magnam officia nemo praesentium autem, libero vel officiis. Omnis pariatur nam voluptatem voluptate at officia repellat ea beatae eligendi? Mollitia error saepe, aperiam facere. Optio maiores deleniti veritatis eaque commodi atque aperiam, debitis iste alias eligendi ut facilis earum! Impedit, tempore.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex error esse a dolore, architecto sapiente, aliquid commodi, laudantium eius nemo enim. Enim, fugit voluptatem rem molestiae. Sed totam quis accusantium iste nesciunt id exercitationem cumque repudiandae voluptas perspiciatis, consequatur quasi, molestias, culpa odio adipisci. Nesciunt optio fugiat iste quam modi, ex vitae odio pariatur! Corrupti explicabo at harum qui doloribus, sit dicta nemo, dolor, enim eum molestias fugiat obcaecati autem eligendi? Nisi delectus eaque architecto voluptatibus, unde sit minus quae quod eligendi soluta recusandae doloribus, officia, veritatis voluptatum eius aliquam quos. Consectetur, nisi? Veritatis totam, unde nostrum exercitationem tempora suscipit, molestias, deserunt ipsum laborum aut iste eaque? Vitae delectus dicta maxime non mollitia? Sapiente eos a quia eligendi deserunt repudiandae modi molestias tenetur autem pariatur ullam itaque, quas eveniet, illo quam rerum ex obcaecati voluptatum nesciunt incidunt culpa provident illum soluta. Voluptas possimus nesciunt inventore perspiciatis neque fugiat, magnam natus repellendus praesentium eum voluptatum, alias incidunt, tempora reprehenderit recusandae et numquam itaque ratione dolor voluptatibus in commodi ut! Neque deserunt nostrum commodi dolor natus quo, non vitae deleniti, vero voluptatem error aspernatur veniam expedita numquam amet quia in dolores velit esse molestiae! Iusto architecto accusantium quisquam recusandae quod vero quia.</p>'
        },
        {
          img: require('../assets/blog/blog-post-2.jpg'),
          title: 'Two Ways To Wear Straight Shoes',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae.',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere. </p><blockquote class="quote-post"><p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error</p></blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum illo deserunt necessitatibus quibusdam sint, eos explicabo tenetur molestiae vero facere, aspernatur sit mollitia perferendis reiciendis. Deleniti magni explicabo sed alias fugit amet animi molestias ipsum maiores. Praesentium sint, id laborum quos. Tempora inventore est, dolor corporis quis doloremque nostrum, eos velit culpa quasi labore. Provident laborum porro nihil iste, magnam officia nemo praesentium autem, libero vel officiis. Omnis pariatur nam voluptatem voluptate at officia repellat ea beatae eligendi? Mollitia error saepe, aperiam facere. Optio maiores deleniti veritatis eaque commodi atque aperiam, debitis iste alias eligendi ut facilis earum! Impedit, tempore.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex error esse a dolore, architecto sapiente, aliquid commodi, laudantium eius nemo enim. Enim, fugit voluptatem rem molestiae. Sed totam quis accusantium iste nesciunt id exercitationem cumque repudiandae voluptas perspiciatis, consequatur quasi, molestias, culpa odio adipisci. Nesciunt optio fugiat iste quam modi, ex vitae odio pariatur! Corrupti explicabo at harum qui doloribus, sit dicta nemo, dolor, enim eum molestias fugiat obcaecati autem eligendi? Nisi delectus eaque architecto voluptatibus, unde sit minus quae quod eligendi soluta recusandae doloribus, officia, veritatis voluptatum eius aliquam quos. Consectetur, nisi? Veritatis totam, unde nostrum exercitationem tempora suscipit, molestias, deserunt ipsum laborum aut iste eaque? Vitae delectus dicta maxime non mollitia? Sapiente eos a quia eligendi deserunt repudiandae modi molestias tenetur autem pariatur ullam itaque, quas eveniet, illo quam rerum ex obcaecati voluptatum nesciunt incidunt culpa provident illum soluta. Voluptas possimus nesciunt inventore perspiciatis neque fugiat, magnam natus repellendus praesentium eum voluptatum, alias incidunt, tempora reprehenderit recusandae et numquam itaque ratione dolor voluptatibus in commodi ut! Neque deserunt nostrum commodi dolor natus quo, non vitae deleniti, vero voluptatem error aspernatur veniam expedita numquam amet quia in dolores velit esse molestiae! Iusto architecto accusantium quisquam recusandae quod vero quia.</p>'
        },
      ],
      posts_size: 2,  // 文章的数量
    }
  },
  methods: {
    toBlog(post) {
      console.log(post)
      store.commit('setBlog', post)
      this.$router.push('/blog')
    }
  }
}
</script>

<style>
.slider1 {
  background-image:url('../assets/slider/slider-1.jpg');
}
.slider2 {
  background-image:url('../assets/slider/slider-2.jpg');
}
.slider3 {
  background-image:url('../assets/slider/slider-3.jpg');
}

@media (min-width:960px) {
  .page-wrapper .post {
    margin: 0 15% 60px 15%;
  }
}
</style>
