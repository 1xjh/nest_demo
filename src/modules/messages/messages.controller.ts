import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Query,
    Put,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';
import { Roles, CurrentUser, NoAuth } from '../../common/decorator/customize';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    /* 查询所有列表 */
    @Get('list')
    @NoAuth()
    findAll(): Promise<Message[]> {
        return this.messagesService.findAll();
    }
    /* 查询单个详情 */
    @Get('detail')
    @NoAuth()
    findOne(@Query() query): Promise<Message> {
        return this.messagesService.findOne(query);
    }
    /* 新增数据 */
    @Post('add')
    @NoAuth()
    addOne(@Body() rMessage): Promise<String> {
        return this.messagesService.addOne(rMessage);
    }
    /* 修改数据 */
    @Put('update')
    @NoAuth()
    updateOne(@Body() uMessage): Promise<String> {
        return this.messagesService.updateOne(uMessage);
    }
    /* 删除数据 */
    @Delete('del')
    @NoAuth()
    delOne(@Query() query): Promise<String> {
        return this.messagesService.delOne(query);
    }
}