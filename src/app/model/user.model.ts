import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
 
@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {
    @Attribute()
    public userName: string;

    @Attribute()
    public email: string;

    @Attribute()
    public firstName: string;

    @Attribute()
    public lastName: string;

    @Attribute()
    public role;

    @Attribute()
    public createdAt;

    @Attribute()
    public updatedAt;

    @Attribute()
    public deletedAt;
}