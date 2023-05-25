import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post(':id')
  @UseGuards(JWTAuthGuard)
  create(
    @Body() createContactDto: CreateContactDto,
    @Param('id') clientId: string,
  ) {
    return this.contactService.create(createContactDto, clientId);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @UseGuards(JWTAuthGuard)
  findAll(@Query('group') group: string | undefined) {
    return this.contactService.findAll(group);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  @UseGuards(JWTAuthGuard)
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  @UseGuards(JWTAuthGuard)
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
