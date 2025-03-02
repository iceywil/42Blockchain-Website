import { TextEffect } from '@/components/ui/text-effect';

export function Text_Effect() {
  return (
    <TextEffect className='text-muted-foreground' per='char' preset='fade'>
      42Blockchain is the largest Blockchain Developer Student Union in the world.
    </TextEffect>
  );
}