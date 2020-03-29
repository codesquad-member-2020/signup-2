//
//  TermsViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

protocol TermsViewControllerDelegate {
    func didSelectAction(hasAgreed: Bool)
}

class TermsViewController: UIViewController {
    
    static let identifier = "Terms"
    
    var delegate: TermsViewControllerDelegate?
    
    @IBOutlet weak var termsTextView: TermsTextView!
    let actionSheetController: UIAlertController = {
        let actionSheet = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)
        return actionSheet
    }()
    var isActionSheetDisplayed = false
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
        setupUI()
        setupTextViewHandler()
        setupActionSheetHandlers()
    }
    
    private func setupTextViewHandler() {
        termsTextView.didScrollToBottomHandler = {
            guard !self.isActionSheetDisplayed else { return }
            self.isActionSheetDisplayed = true
            self.present(self.actionSheetController, animated: true)
        }
    }
    
    private func setupActionSheetHandlers() {
        let agreeAction = UIAlertAction(title: "동의", style: .default) { (_) in
            self.dismiss(animated: true) {
                self.isActionSheetDisplayed = false
                self.delegate?.didSelectAction(hasAgreed: true)
            }
        }
        agreeAction.setValue(UIColor(named: "KeyColor"), forKey: "titleTextColor")
        
        let cancelAction = UIAlertAction(title: "취소", style: .cancel, handler: { (_) in
            self.dismiss(animated: true) {
                self.isActionSheetDisplayed = false
                self.delegate?.didSelectAction(hasAgreed: false)
            }
        })
        actionSheetController.addAction(agreeAction)
        actionSheetController.addAction(cancelAction)
    }
    
    private func setupUI() {
        view.alpha = 0.95
    }
}
