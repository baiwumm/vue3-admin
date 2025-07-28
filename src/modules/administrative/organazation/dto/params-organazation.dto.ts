/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-07-11 16:44:40
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2025-07-25 14:32:48
 * @Description: 请求参数 DTO
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class OrganazationParamsDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: '组织名称',
    required: false,
    default: '阿里巴巴',
  })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: '组织编码',
    required: false,
    default: 'Alibaba',
  })
  code?: string;
}
