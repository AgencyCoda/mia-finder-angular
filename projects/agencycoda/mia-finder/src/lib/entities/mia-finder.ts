import { MiaModel } from "@agencycoda/mia-core";

export class MiaFinder extends MiaModel {
    static TYPE_FILE = 0;
    static TYPE_FOLDER = 1;
    static TYPE_LINK = 2;

    id: number = 0;
    creator_id: number = 0;
    title = '';
    slug = '';
    parent_id?: number;
    type: number = 0;
    status: number = 0;
    item_relation_one?: number;
    item_relation_two?: number;
    url = '';
    size = 0;
    block_user_id?: number;
    type_extra = 0;
    created_at = '';
}
