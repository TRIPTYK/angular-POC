import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Todo } from './todo.model';
 
@JsonApiModelConfig({
    type: 'lists'
})
export class List extends JsonApiModel {
    @Attribute()
    public titre: string;

    @HasMany()
    todos : Todo[];
}