import { UserModule } from './user.module';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    service = module.get<UserService>(UserService);
    const user = await service.getUserByEmail('moon@gmail.com');
    console.log(user);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
