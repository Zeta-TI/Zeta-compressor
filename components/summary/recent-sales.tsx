import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  export function RecentSales() {
    return (
      <Card className="w-[1000px] items-center justify-center">
        <CardHeader>
          <CardTitle>Dados do compressor</CardTitle>
          <CardDescription>
            Todos os dados relacionado a esse compressor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="items-center justify-center flex">
              {/* <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar> */}
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Compressor X</p>
                <p className="text-sm text-muted-foreground">
                  Serial: 91231
                </p>
              </div>
              <div className="ml-auto font-medium">Estado: Saudável</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
    )
  }