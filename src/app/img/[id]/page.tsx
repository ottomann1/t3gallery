import {FullPageImageView} from '~/app/common/full-page-image-view';

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber = Number(photoId)
  if(Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

  return <FullPageImageView photoId={photoId}/>

    }
