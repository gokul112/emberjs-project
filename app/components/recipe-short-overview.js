import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class RecipeShortOverviewComponent extends Component {
    @service recipeData;
  @tracked isExpanded = false;
  @tracked isFavorite = false;

  constructor(){
    super(...arguments);
    this.isFavorite = this.checkFavorite();
    
  }

  get isFavorite(){
    this.checkFavorite();
  }

  checkFavorite(){
        return this.recipeData.isFavorite(this.args.id)
  }

  @action
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  @action
  async deleteRecipe(event) {
    event.preventDefault();
    this.recipeData.deleteRecipe(this.args.id);
    // this.router.transitionTo('recipes');
  }

  @action
  toggleFavorite(event) {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.recipeData.toggleFavorite(this.args.id,this.isFavorite);
  }
}
