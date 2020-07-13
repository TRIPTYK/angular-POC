import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { List } from './list.model';
 
@JsonApiModelConfig({
    type: 'todos'
})
export class Todo extends JsonApiModel {
    @Attribute()
    public description: string;

    @Attribute()
    public done: boolean;

    @BelongsTo() 
    list : List;
}