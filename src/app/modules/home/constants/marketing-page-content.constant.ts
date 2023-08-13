import { Router } from "@angular/router";

export const MARKETING_PAGE_CONTENT = (router: Router) => ({
  pageName: 'MARKETING',
  items: [
    {
      id: 0,
      title: 'Planning and Strategy',
      description: 'Strategy services include a current assessment of marketing and engagement strategies and providing a longer-term plan to achieve your goals. Generally, our clients are looking to increase brand presence and in turn, ramp up business marketing after they have consistent brand imaging and an established online presence. This service provides a plan to execute your longer-term goals, drawing from knowledge from our wider team with very diverse skillets (engineering, restaurant & bar owners, accountants and fund managers). Driven by your strategy, the plan is a detailed campaign comprising the "what," "where," "when," and "how" of our actions, and a focus on tracking outcomes.',
      imageUrl: 'assets/images/marketing/planning-and-strategy.jpg',
      imageDescription: 'Planning and Strategy',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 1,
      title: 'Content and Copywriting',
      description: 'Content writing involves creating material that educates, informs or entertains readers, without directly promoting a product or service. The process typically includes researching the topic, organising information and writing engaging, informative content. The purpose is to build trust, brand loyalty, and for search engine optimization in the form of blog posts, tutorials, newsletters, case studies and social media posts.',
      imageUrl: 'assets/images/marketing/content-and-copywriting.jpg',
      imageDescription: 'Content and Copywriting',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    }
  ]
});