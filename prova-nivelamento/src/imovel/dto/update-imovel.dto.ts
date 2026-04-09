import * as mappedTypes from '@nestjs/mapped-types';
import { CreateImovelDto } from './create-imovel.dto';

export class UpdateUserDto extends mappedTypes.PartialType(CreateImovelDto) {
    
}
