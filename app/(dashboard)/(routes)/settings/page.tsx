import { SubscriptionButton } from "@/components/pdf/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import SettingsUpgrade from "./_components/settings-upgrade";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SwitchForm } from "./_components/settings-page";
import BillingForm from "@/components/pdfchat/billing-form"
import { getUserSubscriptionPlan } from "@/lib/stripe"

const SettingsPage = async () => {
  //For Companion Sub
  const isPro = await checkSubscription();
  //PdfChat
  const subscriptionPlan = await getUserSubscriptionPlan()

  return ( 
    <div className="h-full p-4 space-y-2">

      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-muted-foreground text-sm">
        {isPro ? 
        "You are currently on a Pro plan." : "You are currently on a free plan."}
      </div>

      <SubscriptionButton isPro={isPro} />
      {isPro ? 
        <div>
          <Card>
              <CardHeader>
                <div>
                  Only Pro Settings Toggles
                </div>
              </CardHeader>
              <CardContent>
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  <Switch id="cool-mode" />
                  <Label htmlFor="cool-mode">Cool Mode</Label>
              </CardContent>
          </Card>
        </div>
      : 
      
      <Card className="p-5">
              <CardHeader>
                <div>
                  Only Free Plan Settings Toggles
                  {/* <SettingsUpgrade/> */}
                </div>
              </CardHeader>
              <CardDescription>
              If you were pro, you would see different settings
              </CardDescription>
              <CardContent className="my-5 flex flex-col gap-y-3">
                 
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Free only Settings</Label>
                  <Switch id="cool-mode" />
                  <Label htmlFor="cool-mode">Cool Mode</Label>
              </CardContent>
          </Card>
      }
      <Card className="">
              <CardHeader>
                <div>
                  Free & Pro Plan Settings Toggles
                </div>
              </CardHeader>
              <CardContent>
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  <Switch id="cool-mode" />
                  <Label htmlFor="cool-mode">Boring Mode</Label>
              </CardContent>
          </Card>
          <SwitchForm/>
          <BillingForm subscriptionPlan={subscriptionPlan} /> 
    </div>
   );
}
 
export default SettingsPage;